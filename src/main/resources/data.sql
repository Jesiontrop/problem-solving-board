DELETE FROM board;
DELETE FROM areas;
DELETE FROM fm_responsible;
DELETE FROM resolution_statuses;
DELETE FROM responsible;
DELETE FROM risk_levels;
DELETE FROM solving_levels;

SELECT setval('board_id_seq', 1, false);
SELECT setval('areas_id_seq', 1, false);
SELECT setval('fm_responsible_id_seq', 1, false);
SELECT setval('resolution_statuses_id_seq', 1, false);
SELECT setval('responsible_id_seq', 1, false);
SELECT setval('risk_levels_id_seq', 1, false);
SELECT setval('solving_levels_id_seq', 1, false);

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
    ('ЦКР');

INSERT INTO fm_responsible (name) VALUES
    ('ФН Снабжение'),
    ('ФН Ремонты'),
    ('ФН Персонал'),
    ('ФН ОЭ'),
    ('ФН ОТиПБ'),
    ('ФН ЭУ');

INSERT INTO risk_levels (name) VALUES
    ('Приемлемый'),
    ('Высокий'),
    ('Неприемлемый');

INSERT INTO solving_levels (name) VALUES
    ('Участок'),
    ('Цех'),
    ('Отдел'),
    ('ФН'),
    ('Предприятие'),
    ('ЦРМО');

INSERT INTO resolution_statuses (name) VALUES
    ('Решена'),
    ('В работе'),
    ('Требуется эскалация на уровень ФН'),
    ('Требуется эскалация на уровень руководства'),
    ('Не решена');

INSERT INTO positions (name) VALUES
    ('Работник'),
    ('Руководитель');