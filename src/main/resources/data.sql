DELETE FROM board;
DELETE FROM areas;
DELETE FROM fm_responsible;
DELETE FROM resolution_statuses;
DELETE FROM responsible;
DELETE FROM risk_levels;
DELETE FROM solving_levels;
DELETE FROM leaders;
DELETE FROM users;
DELETE FROM positions;
DELETE FROM informants;

SELECT setval('board_id_seq', 1, false);
SELECT setval('areas_id_seq', 1, false);
SELECT setval('fm_responsible_id_seq', 1, false);
SELECT setval('resolution_statuses_id_seq', 1, false);
SELECT setval('responsible_id_seq', 1, false);
SELECT setval('risk_levels_id_seq', 1, false);
SELECT setval('solving_levels_id_seq', 1, false);
SELECT setval('leaders_id_seq', 1, false);
SELECT setval('users_id_seq', 1, false);
SELECT setval('positions_id_seq', 1, false);
SELECT setval('informants_id_seq', 1, false);

INSERT INTO areas(name) VALUES
    ('ВиВОС'),
    ('НРСиОЛЗ'),
    ('Ковшевой'),
    ('ПП'),
    ('СГП'),
    ('ОиО'),
    ('Вальцетокарный'),
    ('ВОиВП'),
    ('ЭнС'),
    ('Эксплуатации'),
    ('ЛВД'),
    ('СЦБСиПХ'),
    ('ПОП'),
    ('УРСО'),
    ('УРПС'),
    ('УРПО'),
    ('УРВО'),
    ('Автотранспортный отдел'),
    ('Отдел главного механика'),
    ('Отдел главного электрика'),
    ('Производственно-технический отдел'),
    ('Проектно-конструкторский отдел'),
    ('Планово-экономический отдел'),
    ('Отдел экологической безопасности'),
    ('Центральная заводская лаборатория'),
    ('Лаборатория метрологии и радиационного контроля'),
    ('Отдел капитального строительства'),
    ('Отдел внешне-экономической деятельности'),
    ('Отдел повышения эффективности производства'),
    ('Отдел сертификации и качества'),
    ('Отдел охраны труда и пром. безопасности'),
    ('Отдел по экономической безопасности'),
    ('Отдел по административно хозяйственной деятельности'),
    ('Группа подготовки и развития персонала'),
    ('ЦКР');;

INSERT INTO fm_responsible (name) VALUES
    ('ФН Снабжение'),
    ('ФН Ремонты'),
    ('ФН Персонал'),
    ('ФН ОЭ'),
    ('ФН ОТиПБ'),
    ('ФН ЭУ');;

INSERT INTO risk_levels (name) VALUES
    ('Приемлемый'),
    ('Высокий'),
    ('Неприемлемый');;

INSERT INTO solving_levels (name) VALUES
    ('Участок'),
    ('Цех'),
    ('Отдел'),
    ('ФН'),
    ('Предприятие'),
    ('ЦРМО');;

INSERT INTO resolution_statuses (name) VALUES
    ('Решена'),
    ('В работе'),
    ('Требуется эскалация на уровень ФН'),
    ('Требуется эскалация на уровень руководства'),
    ('Не решена');;

INSERT INTO positions (name) VALUES
    ('Работник'),
    ('Слесарь'),
    ('Слесарь-ремонтник'),
    ('Электрогазосварщик '),
    ('Энергетик'),
    ('Инженер'),
    ('Инженер-технолог'),
    ('Лаборант'),
    ('Газовщик'),
    ('Водитель'),
    ('Начальник смены'),
    ('Наладчик'),
    ('Оператор'),
    ('Наладчик станков с ЧПУ'),
    ('Оператор станков с ЧПУ'),
    ('Электрик'),
    ('Старший млектрик'),
    ('Главный электрик'),
    ('Механик'),
    ('Старший механик'),
    ('Главный механик'),
    ('Разливщик стали'),
    ('Мастер отдела/участка'),
    ('Старший мастер отдела/участка'),
    ('Главный специалист отдела/участка'),
    ('Начальник отдела/участка'),
    ('Специалист отдела/участка'),
    ('Ведущий специалист отдела/участка'),
    ('Специалист по охране труда'),
    ('Ведущий специалист по охране труда'),
    ('Начальник службы промышленной безопасности');;