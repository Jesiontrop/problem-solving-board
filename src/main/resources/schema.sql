/* Tables */

CREATE TABLE IF NOT EXISTS positions (
	id serial PRIMARY KEY,
	name varchar(255)
);

CREATE TABLE IF NOT EXISTS leaders (
    id bigserial PRIMARY KEY,
    username varchar(255),
    email varchar(255) UNIQUE
);

CREATE TABLE IF NOT EXISTS users (
    id bigserial PRIMARY KEY,
    username varchar(255),
    email varchar(255) UNIQUE,
    position varchar(255),
    password varchar(255),
    leader_id bigint,
    CONSTRAINT users_leader_id_fkey FOREIGN KEY (leader_id)
        REFERENCES leaders (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS areas (
  id bigserial PRIMARY KEY,
  name varchar(255)
);

CREATE TABLE IF NOT EXISTS risk_levels (
  id bigserial PRIMARY KEY,
  name varchar(255)
);

CREATE TABLE IF NOT EXISTS resolution_statuses (
  id bigserial PRIMARY KEY,
  name varchar(255)
);

CREATE TABLE IF NOT EXISTS responsible (
    id bigserial PRIMARY KEY,
    user_id bigint UNIQUE,
    CONSTRAINT responsible_user_id_fkey FOREIGN KEY (user_id)
        REFERENCES users (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS fm_responsible (
  id bigserial PRIMARY KEY,
  name varchar(255)
);

CREATE TABLE IF NOT EXISTS solving_levels (
  id bigserial PRIMARY KEY,
  name varchar(255)
);

CREATE TABLE IF NOT EXISTS informants (
	id bigserial PRIMARY KEY,
	fullname varchar(255),
	position varchar(255)
);

CREATE TABLE IF NOT EXISTS board (
    id bigserial PRIMARY KEY,
    registration_date timestamp with time zone,
    area_id bigint,
    problem text,
    risk_level_id bigint,
    proposed_solution text,
    responsible_id bigint,
    planned_date date,
    actual_date date,
    solving_level_id bigint,
    resolution_status_id bigint,
    fm_responsible_id bigint,
    reason_for_refusal text,
    informant_id bigint,
    CONSTRAINT board_informant_id_fkey FOREIGN KEY (informant_id)
        REFERENCES informants (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE CASCADE,
    CONSTRAINT board_area_id_fkey FOREIGN KEY (area_id)
        REFERENCES areas (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE CASCADE,
    CONSTRAINT board_fm_responsible_id_fkey FOREIGN KEY (fm_responsible_id)
        REFERENCES fm_responsible (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE CASCADE,
    CONSTRAINT board_resolution_status_id_fkey FOREIGN KEY (resolution_status_id)
        REFERENCES resolution_statuses (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE CASCADE,
    CONSTRAINT board_responsible_id_fkey FOREIGN KEY (responsible_id)
        REFERENCES responsible (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE CASCADE,
    CONSTRAINT board_risk_level_id_fkey FOREIGN KEY (risk_level_id)
        REFERENCES risk_levels (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE CASCADE,
    CONSTRAINT board_solving_level_id_fkey FOREIGN KEY (solving_level_id)
        REFERENCES solving_levels (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE CASCADE
);

/* Views */

CREATE OR REPLACE VIEW v_responsible AS
	SELECT r.id, r.user_id,
		u.username AS user_username,
		u.email AS user_email,
		u.position AS user_position
	FROM responsible AS r
	LEFT JOIN users AS u ON
		r.user_id = u.id;

CREATE OR REPLACE VIEW public.v_board
 AS
SELECT b.id,
       b.registration_date,
       b.area_id,
       areas.name AS area_name,
       b.problem,
       b.risk_level_id,
       rl.name AS risk_level_name,
       b.proposed_solution,
       b.responsible_id,
       v_r.user_username AS responsible_name,
       v_r.user_email AS responsible_email,
       b.planned_date,
       b.actual_date,
       b.solving_level_id,
       sl.name AS solving_level_name,
       b.resolution_status_id,
       rs.name AS resolution_status_name,
       b.fm_responsible_id,
       fmr.name AS fm_responsible_name,
       b.reason_for_refusal,
       b.informant_id,
       i.fullname AS informant_fullname,
       i."position" AS informant_position
FROM board b
         LEFT JOIN areas ON b.area_id = areas.id
         LEFT JOIN risk_levels rl ON b.risk_level_id = rl.id
         LEFT JOIN v_responsible v_r ON b.responsible_id = v_r.id
         LEFT JOIN solving_levels sl ON b.solving_level_id = sl.id
         LEFT JOIN resolution_statuses rs ON b.resolution_status_id = rs.id
         LEFT JOIN fm_responsible fmr ON b.fm_responsible_id = fmr.id
         LEFT JOIN informants i ON b.informant_id = i.id
ORDER BY b.registration_date DESC;

/* Functions */

CREATE OR REPLACE FUNCTION exist_leader(u varchar(255), e varchar(255))
RETURNS bigint AS $$
DECLARE leader_id bigint;
BEGIN
	SELECT l.id INTO leader_id
	FROM leaders AS l
	WHERE l.username = u AND l.email = e;

	RETURN leader_id;
END;
$$ LANGUAGE plpgsql;;

/* Triggers functions */

CREATE OR REPLACE FUNCTION user_is_leader_trigger()
RETURNS trigger AS $user_is_leader_trigger$
DECLARE leader_id bigint;
BEGIN
	SELECT exist_leader(NEW.username, NEW.email) INTO leader_id;
	NEW.leader_id = leader_id;
    RETURN NEW;
END;
$user_is_leader_trigger$ LANGUAGE plpgsql;;