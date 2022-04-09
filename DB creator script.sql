IF NOT EXISTS(SELECT * FROM sys.databases WHERE name = 'LSI')
BEGIN CREATE DATABASE [LSI]
END
GO
USE [LSI]
GO
IF NOT EXISTS (SELECT * FROM sysobjects WHERE name='Exports' and xtype='U')
BEGIN
CREATE TABLE Exports  
(  
 ID int IDENTITY(1,1),  
 Name nvarchar (20),  
 Date date,
 Time time,
 UserName varchar(20),
 Local varchar(20)
)
END