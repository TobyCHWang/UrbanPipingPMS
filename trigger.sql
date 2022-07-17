/** TASKS DURATION TRIGGER **/

CREATE TRIGGER set_duration_bir BEFORE INSERT ON tasks
FOR EACH ROW
SET NEW.task_duration = DATEDIFF(NEW.task_due_date, NEW.task_start_date);

CREATE TRIGGER set_duration_brs BEFORE UPDATE ON tasks
FOR EACH ROW
SET NEW.task_duration = DATEDIFF(NEW.task_due_date, NEW.task_start_date);
