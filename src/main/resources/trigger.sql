/* Triggers cannot be declared more than once, these sql queries need to run manually */

CREATE TRIGGER user_is_leader_trigger BEFORE INSERT ON users
    EXECUTE PROCEDURE user_is_leader_trigger();