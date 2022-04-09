USE [LSI]
GO
IF EXISTS (SELECT * FROM sysobjects WHERE name='Exports' and xtype='U')
BEGIN

INSERT INTO Exports (Name, Date, Time, UserName, LocalName)
VALUES 
('Test1', '2021-01-01', '01:00:00', 'User12', 'Local1'),
('Test2', '2021-02-01', '03:00:00', 'User11', 'Local2'),
('Test3', '2021-03-01', '02:20:00', 'User10', 'Local3'),
('Test4', '2021-04-01', '01:00:00', 'User9', 'Local4'),
('Test5', '2021-05-01', '05:40:00', 'User8', 'Local5'),
('Test6', '2021-06-01', '07:00:00', 'User7', 'Local6'),
('Test7', '2021-07-01', '02:00:00', 'User6', 'Local7'),
('Test8', '2021-08-01', '01:00:00', 'User5', 'Local8'),
('Test9', '2021-09-01', '02:30:00', 'User4', 'Local9'),
('Test10', '2021-10-01', '05:00:00', 'User3', 'Local10'),
('Test11', '2021-11-01', '01:00:00', 'User2', 'Local11'),
('Test12', '2021-12-01', '09:00:00', 'User1', 'Local12');
END

SELECT * FROM Exports