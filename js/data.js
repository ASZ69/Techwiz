// JavaScript Document
var db = window.openDatabase('JOBS','1.0','For JOBS',4 * 1024 * 1024);

initDb();

function initDb(){
	if(window.openDatabase){
		db.transaction(function(tx){
//			for users
			tx.executeSql('create table if not exists users (uId INTEGER PRIMARY KEY, uName VARCHAR,uEmail VARCHAR,uPswd VARCHAR,uPicLink VARCHAR,uCategory)');
			
//			for categories
			tx.executeSql('create table if not exists categories (catId INTEGER PRIMARY KEY, catName VARCHAR)');
			
//			for jobs
			tx.executeSql('create table if not exists jobs (jId INTEGER PRIMARY KEY, jFKCatId INTEGER,jTitle VARCHAR,jSaleryMin INTEGER,jSaleryMax INTEGER,jDiscrip VARCHAR,jSkills VARCHAR,jLocation VARCHAR,jVacancies INTEGER,jExp INTEGER,jGender VARCHAR,jSelfId INTEGER)');
			
//			for employes
			tx.executeSql('create table if not exists employes (eId INTEGER PRIMARY KEY, eFKCatId INTEGER,eFKJobId INTEGER,eDisc VARCHAR,eCVLink VARCHAR,eSelfId INTEGER)');
		});
	}else{
		alert("Your browser don't support WEBSQL");
	}
}

function addEmp(catId,jobId,discrip,cvLink,selfId){
	db.transaction(function(tx){
		tx.executeSql('INSERT INTO employes (eFKCatId,eFKJobId,eDisc,eCVLink,eSelfId) VALUES ("'+catId+'","'+jobId+'","'+discrip+'","'+cvLink+'","'+selfId+'")');
	});
}

function delEmp(catId,jobId,discrip,cvLink,selfId){
	db.transaction(function(tx){
		tx.executeSql('INSERT INTO employes (eFKCatId,eFKJobId,eDisc,eCVLink,eSelfId) VALUES ("'+catId+'","'+jobId+'","'+discrip+'","'+cvLink+'","'+selfId+'")');
	});
}

function addJobs(catId,title,salMin,salMax,discrip,skills,locations,vacancies,exp,gender,selfId){
	db.transaction(function(tx){
		tx.executeSql('SELECT * from jobs where title=?',[title],function(tx,data){
			var len = data.rows.length;
			if(len > 0){
				alert('Title Already Exists');
			}else{
				tx.executeSql('INSERT INTO jobs (jFKCatId,jTitle,jSaleryMin,jSaleryMax,jDiscrip,jSkills,jLocation,jVacancies,jExp,jGender,jSelfId) VALUES ("'+catId+'","'+title+'","'+salMin+'","'+salMax+'","'+discrip+'","'+skills+'","'+locations+'","'+vacancies+'","'+exp+'","'+gender+'","'+selfId+'")');
			}
		},errorDB);
	});
}

function delJobs(jobId){
	db.transaction(function(tx){
		tx.executeSql('DELETE FROM jobs where jId = "'+jobId+'"');
	});
}

function signUp(name,email,pswd,picLink,category){
	db.transaction(function(tx){
		tx.executeSql('SELECT * from users where uEmail=?',[email],function(tx,data){
			var len = data.rows.length;
			if(len > 0){
				alert('Already SignUp');
			}else{
				tx.executeSql('INSERT INTO users (uName,uEmail,uPswd,uPicLink,uCategory) VALUES ("'+name+'","'+email+'","'+pswd+'","'+picLink+'","'+category+'")');
			}
		},errorDB);
	});
}

function signIn(email,pswd){
	db.transaction(function(tx){
		tx.executeSql('SELECT * from users where uEmail=? and uPswd=?',[email,pswd],function(tx,data){
			var len = data.rows.length;
			if(len > 0){
//			   'valid';
			}else{
//				'notValid';
			}
		},errorDB);
	});
}

function addCat(catName){
	db.transaction(function(tx){
		tx.executeSql('SELECT * from categories where catName=?',[catName],function(tx,data){
			var len = data.rows.length;
			if(len > 0){
				alert('Already available cat');
			}else{
				tx.executeSql('INSERT INTO categories (catName) VALUES ("'+catName+'")');
			}
		},errorDB);
	});
}

function errorDB(tx, err) {
    alert("Error processing SQL: " + err.code);
}

signUp('Awais','awa@aa.co','1234','https','emp');

signIn('awa@aa.co','1234');