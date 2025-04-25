// Topics in October 2020
db.topics.find({
    date: {
      $gte: ISODate("2020-10-01T00:00:00Z"),
      $lte: ISODate("2020-10-31T23:59:59Z")
    }
  });
  
  // Tasks in October 2020
  db.tasks.find({
    date: {
      $gte: ISODate("2020-10-01T00:00:00Z"),
      $lte: ISODate("2020-10-31T23:59:59Z")
    }
  });
  {
    _id: ObjectId('680b5b8e8b58253d6af6620a'),
    user_id: ObjectId('680b5ad38b58253d6af661a2'),
    topic_id: ObjectId('680b5b3d8b58253d6af66200'),
    task_name: 'HTML Task',
    submitted: true,
    date: 2020-10-11T00:00:00.000Z
  }
  {
    _id: ObjectId('680b5b8f8b58253d6af6620c'),
    user_id: ObjectId('680b5ad38b58253d6af661a2'),
    topic_id: ObjectId('680b5b3d8b58253d6af66202'),
    task_name: 'JavaScript Task',
    submitted: true,
    date: 2020-10-12T00:00:00.000Z
  }
  {
    _id: ObjectId('680b5b8f8b58253d6af6620e'),
    user_id: ObjectId('680b5ad38b58253d6af661a2'),
    topic_id: ObjectId('680b5b3d8b58253d6af66204'),
    task_name: 'Node.js Task',
    submitted: true,
    date: 2020-10-13T00:00:00.000Z
  }
  {
    _id: ObjectId('680b5b8f8b58253d6af66210'),
    user_id: ObjectId('680b5ad38b58253d6af661a2'),
    topic_id: ObjectId('680b5b3d8b58253d6af66206'),
    task_name: 'Express Task',
    submitted: true,
    date: 2020-10-14T00:00:00.000Z
  }
  {
    _id: ObjectId('680b5b8f8b58253d6af66212'),
    user_id: ObjectId('680b5ad38b58253d6af661a2'),
    topic_id: ObjectId('680b5b3d8b58253d6af66208'),
    task_name: 'Agile Task',
    submitted: true,
    date: 2020-10-15T00:00:00.000Z
  }
  {
    _id: ObjectId('680b5b8f8b58253d6af66214'),
    user_id: ObjectId('680b5ad38b58253d6af661a5'),
    topic_id: ObjectId('680b5b3d8b58253d6af66200'),
    task_name: 'HTML Task',
    submitted: true,
    date: 2020-10-11T00:00:00.000Z
  }
  {
    _id: ObjectId('680b5b8f8b58253d6af66216'),
    user_id: ObjectId('680b5ad38b58253d6af661a5'),
    topic_id: ObjectId('680b5b3d8b58253d6af66202'),
    task_name: 'JavaScript Task',
    submitted: true,
    date: 2020-10-12T00:00:00.000Z
  }
  {
    _id: ObjectId('680b5b908b58253d6af66218'),
    user_id: ObjectId('680b5ad38b58253d6af661a5'),
    topic_id: ObjectId('680b5b3d8b58253d6af66204'),
    task_name: 'Node.js Task',
    submitted: true,
    date: 2020-10-13T00:00:00.000Z
  }
  {
    _id: ObjectId('680b5b908b58253d6af6621a'),
    user_id: ObjectId('680b5ad38b58253d6af661a5'),
    topic_id: ObjectId('680b5b3d8b58253d6af66206'),
    task_name: 'Express Task',
    submitted: true,
    date: 2020-10-14T00:00:00.000Z
  }
  {
    _id: ObjectId('680b5b908b58253d6af6621c'),
    user_id: ObjectId('680b5ad38b58253d6af661a5'),
    topic_id: ObjectId('680b5b3d8b58253d6af66208'),
    task_name: 'Agile Task',
    submitted: false,
    date: 2020-10-15T00:00:00.000Z
  }
  {
    _id: ObjectId('680b5b908b58253d6af6621e'),
    user_id: ObjectId('680b5ad38b58253d6af661a7'),
    topic_id: ObjectId('680b5b3d8b58253d6af66200'),
    task_name: 'HTML Task',
    submitted: false,
    date: 2020-10-11T00:00:00.000Z
  }
  {
    _id: ObjectId('680b5b908b58253d6af66220'),
    user_id: ObjectId('680b5ad38b58253d6af661a7'),
    topic_id: ObjectId('680b5b3d8b58253d6af66202'),
    task_name: 'JavaScript Task',
    submitted: true,
    date: 2020-10-12T00:00:00.000Z
  }
  {
    _id: ObjectId('680b5b918b58253d6af66222'),
    user_id: ObjectId('680b5ad38b58253d6af661a7'),
    topic_id: ObjectId('680b5b3d8b58253d6af66204'),
    task_name: 'Node.js Task',
    submitted: true,
    date: 2020-10-13T00:00:00.000Z
  }
  {
    _id: ObjectId('680b5b918b58253d6af66224'),
    user_id: ObjectId('680b5ad38b58253d6af661a7'),
    topic_id: ObjectId('680b5b3d8b58253d6af66206'),
    task_name: 'Express Task',
    submitted: true,
    date: 2020-10-14T00:00:00.000Z
  }
  {
    _id: ObjectId('680b5b918b58253d6af66226'),
    user_id: ObjectId('680b5ad38b58253d6af661a7'),
    topic_id: ObjectId('680b5b3d8b58253d6af66208'),
    task_name: 'Agile Task',
    submitted: true,
    date: 2020-10-15T00:00:00.000Z
  }
  {
    _id: ObjectId('680b5b918b58253d6af66228'),
    user_id: ObjectId('680b5ad38b58253d6af661b1'),
    topic_id: ObjectId('680b5b3d8b58253d6af66200'),
    task_name: 'HTML Task',
    submitted: true,
    date: 2020-10-11T00:00:00.000Z
  }
  {
    _id: ObjectId('680b5b918b58253d6af6622a'),
    user_id: ObjectId('680b5ad38b58253d6af661b1'),
    topic_id: ObjectId('680b5b3d8b58253d6af66202'),
    task_name: 'JavaScript Task',
    submitted: true,
    date: 2020-10-12T00:00:00.000Z
  }
  {
    _id: ObjectId('680b5b918b58253d6af6622c'),
    user_id: ObjectId('680b5ad38b58253d6af661b1'),
    topic_id: ObjectId('680b5b3d8b58253d6af66204'),
    task_name: 'Node.js Task',
    submitted: true,
    date: 2020-10-13T00:00:00.000Z
  }
  {
    _id: ObjectId('680b5b928b58253d6af6622e'),
    user_id: ObjectId('680b5ad38b58253d6af661b1'),
    topic_id: ObjectId('680b5b3d8b58253d6af66206'),
    task_name: 'Express Task',
    submitted: true,
    date: 2020-10-14T00:00:00.000Z
  }
  {
    _id: ObjectId('680b5b928b58253d6af66230'),
    user_id: ObjectId('680b5ad38b58253d6af661b1'),
    topic_id: ObjectId('680b5b3d8b58253d6af66208'),
    task_name: 'Agile Task',
    submitted: true,
    date: 2020-10-15T00:00:00.000Z
  }
  Type "it" for more
  //Find all the company drives between 15-Oct-2020 and 31-Oct-2020
  //Find all the company drives between 15-Oct-2020 and 31-Oct-2020
  db.company_drives.find({
    date: {
      $gte: ISODate("2020-10-15T00:00:00Z"),
      $lte: ISODate("2020-10-31T23:59:59Z")
    }
  });
  {
    _id: ObjectId('680b5e748b58253d6af664fa'),
    company: 'Google',
    date: 2020-10-16T00:00:00.000Z,
    students_attended: [
      ObjectId('680b5ad38b58253d6af661ae'),
      ObjectId('680b5ad38b58253d6af661c3'),
      ObjectId('680b5ad38b58253d6af661c8'),
      ObjectId('680b5ad38b58253d6af66197'),
      ObjectId('680b5ad38b58253d6af661a5'),
      ObjectId('680b5ad38b58253d6af661a6'),
      ObjectId('680b5ad38b58253d6af661b2'),
      ObjectId('680b5ad38b58253d6af661bb'),
      ObjectId('680b5ad38b58253d6af661c2'),
      ObjectId('680b5ad38b58253d6af661b3')
    ]
  }
  {
    _id: ObjectId('680b5e748b58253d6af664fb'),
    company: 'Amazon',
    date: 2020-10-28T00:00:00.000Z,
    students_attended: [
      ObjectId('680b5ad38b58253d6af661a8'),
      ObjectId('680b5ad38b58253d6af661bc'),
      ObjectId('680b5ad38b58253d6af661bd'),
      ObjectId('680b5ad38b58253d6af661a1'),
      ObjectId('680b5ad38b58253d6af661b3'),
      ObjectId('680b5ad38b58253d6af661a9'),
      ObjectId('680b5ad38b58253d6af661af'),
      ObjectId('680b5ad38b58253d6af661ba'),
      ObjectId('680b5ad38b58253d6af661be'),
      ObjectId('680b5ad38b58253d6af66198')
    ]
  }
  {
    _id: ObjectId('680b5ec98b58253d6af664ff'),
    company: 'Google',
    date: 2020-10-16T00:00:00.000Z,
    students_attended: [
      ObjectId('680b5ad38b58253d6af661a0'),
      ObjectId('680b5ad38b58253d6af661b0'),
      ObjectId('680b5ad38b58253d6af661a8'),
      ObjectId('680b5ad38b58253d6af661c1'),
      ObjectId('680b5ad38b58253d6af661be'),
      ObjectId('680b5ad38b58253d6af66198'),
      ObjectId('680b5ad38b58253d6af661c6'),
      ObjectId('680b5ad38b58253d6af661b1'),
      ObjectId('680b5ad38b58253d6af661a9'),
      ObjectId('680b5ad38b58253d6af6619d')
    ]
  }
  {
    _id: ObjectId('680b5ec98b58253d6af66500'),
    company: 'Amazon',
    date: 2020-10-28T00:00:00.000Z,
    students_attended: [
      ObjectId('680b5ad38b58253d6af661a7'),
      ObjectId('680b5ad38b58253d6af661b3'),
      ObjectId('680b5ad38b58253d6af6619e'),
      ObjectId('680b5ad38b58253d6af661c4'),
      ObjectId('680b5ad38b58253d6af661a1'),
      ObjectId('680b5ad38b58253d6af661a0'),
      ObjectId('680b5ad38b58253d6af661c6'),
      ObjectId('680b5ad38b58253d6af661b7'),
      ObjectId('680b5ad38b58253d6af661ae'),
      ObjectId('680b5ad38b58253d6af661b1')
    ]
  }
  //Find all company drives and students who appeared for placement
  db.company_drives.aggregate([
    {
      $lookup: {
        from: "users",
        localField: "students_attended",
        foreignField: "_id",
        as: "students"
      }
    },
    {
      $project: {
        _id: 0,
        company: 1,
        date: 1,
        "students.name": 1,
        "students.email": 1
      }
    }
  ]);
  {
    company: 'Google',
    date: 2020-10-16T00:00:00.000Z,
    students: [
      {
        name: 'User1',
        email: 'user1@zenclass.dev'
      },
      {
        name: 'User45',
        email: 'user45@zenclass.dev'
      },
      {
        name: 'User50',
        email: 'user50@zenclass.dev'
      },
      {
        name: 'User44',
        email: 'user44@zenclass.dev'
      },
      {
        name: 'User37',
        email: 'user37@zenclass.dev'
      },
      {
        name: 'User29',
        email: 'user29@zenclass.dev'
      },
      {
        name: 'User24',
        email: 'user24@zenclass.dev'
      },
      {
        name: 'User28',
        email: 'user28@zenclass.dev'
      },
      {
        name: 'User15',
        email: 'user15@zenclass.dev'
      },
      {
        name: 'User16',
        email: 'user16@zenclass.dev'
      }
    ]
  }
  {
    company: 'Amazon',
    date: 2020-10-28T00:00:00.000Z,
    students: [
      {
        name: 'User36',
        email: 'user36@zenclass.dev'
      },
      {
        name: 'User40',
        email: 'user40@zenclass.dev'
      },
      {
        name: 'User2',
        email: 'user2@zenclass.dev'
      },
      {
        name: 'User29',
        email: 'user29@zenclass.dev'
      },
      {
        name: 'User38',
        email: 'user38@zenclass.dev'
      },
      {
        name: 'User18',
        email: 'user18@zenclass.dev'
      },
      {
        name: 'User39',
        email: 'user39@zenclass.dev'
      },
      {
        name: 'User19',
        email: 'user19@zenclass.dev'
      },
      {
        name: 'User11',
        email: 'user11@zenclass.dev'
      },
      {
        name: 'User25',
        email: 'user25@zenclass.dev'
      }
    ]
  }
  {
    company: 'TCS',
    date: 2020-11-05T00:00:00.000Z,
    students: [
      {
        name: 'User5',
        email: 'user5@zenclass.dev'
      },
      {
        name: 'User32',
        email: 'user32@zenclass.dev'
      },
      {
        name: 'User47',
        email: 'user47@zenclass.dev'
      },
      {
        name: 'User48',
        email: 'user48@zenclass.dev'
      },
      {
        name: 'User37',
        email: 'user37@zenclass.dev'
      },
      {
        name: 'User17',
        email: 'user17@zenclass.dev'
      },
      {
        name: 'User24',
        email: 'user24@zenclass.dev'
      },
      {
        name: 'User26',
        email: 'user26@zenclass.dev'
      },
      {
        name: 'User11',
        email: 'user11@zenclass.dev'
      },
      {
        name: 'User30',
        email: 'user30@zenclass.dev'
      }
    ]
  }
  {
    company: 'Zoho',
    date: 2020-11-15T00:00:00.000Z,
    students: [
      {
        name: 'User10',
        email: 'user10@zenclass.dev'
      },
      {
        name: 'User45',
        email: 'user45@zenclass.dev'
      },
      {
        name: 'User41',
        email: 'user41@zenclass.dev'
      },
      {
        name: 'User29',
        email: 'user29@zenclass.dev'
      },
      {
        name: 'User39',
        email: 'user39@zenclass.dev'
      },
      {
        name: 'User21',
        email: 'user21@zenclass.dev'
      },
      {
        name: 'User27',
        email: 'user27@zenclass.dev'
      },
      {
        name: 'User20',
        email: 'user20@zenclass.dev'
      },
      {
        name: 'User43',
        email: 'user43@zenclass.dev'
      },
      {
        name: 'User34',
        email: 'user34@zenclass.dev'
      }
    ]
  }
  {
    company: 'Freshworks',
    date: 2020-11-25T00:00:00.000Z,
    students: [
      {
        name: 'User16',
        email: 'user16@zenclass.dev'
      },
      {
        name: 'User9',
        email: 'user9@zenclass.dev'
      },
      {
        name: 'User44',
        email: 'user44@zenclass.dev'
      },
      {
        name: 'User41',
        email: 'user41@zenclass.dev'
      },
      {
        name: 'User32',
        email: 'user32@zenclass.dev'
      },
      {
        name: 'User34',
        email: 'user34@zenclass.dev'
      },
      {
        name: 'User26',
        email: 'user26@zenclass.dev'
      },
      {
        name: 'User6',
        email: 'user6@zenclass.dev'
      },
      {
        name: 'User25',
        email: 'user25@zenclass.dev'
      },
      {
        name: 'User11',
        email: 'user11@zenclass.dev'
      }
    ]
  }
  {
    company: 'Google',
    date: 2020-10-16T00:00:00.000Z,
    students: [
      {
        name: 'User2',
        email: 'user2@zenclass.dev'
      },
      {
        name: 'User7',
        email: 'user7@zenclass.dev'
      },
      {
        name: 'User43',
        email: 'user43@zenclass.dev'
      },
      {
        name: 'User48',
        email: 'user48@zenclass.dev'
      },
      {
        name: 'User40',
        email: 'user40@zenclass.dev'
      },
      {
        name: 'User18',
        email: 'user18@zenclass.dev'
      },
      {
        name: 'User26',
        email: 'user26@zenclass.dev'
      },
      {
        name: 'User10',
        email: 'user10@zenclass.dev'
      },
      {
        name: 'User27',
        email: 'user27@zenclass.dev'
      },
      {
        name: 'User19',
        email: 'user19@zenclass.dev'
      }
    ]
  }
  {
    company: 'Amazon',
    date: 2020-10-28T00:00:00.000Z,
    students: [
      {
        name: 'User24',
        email: 'user24@zenclass.dev'
      },
      {
        name: 'User27',
        email: 'user27@zenclass.dev'
      },
      {
        name: 'User46',
        email: 'user46@zenclass.dev'
      },
      {
        name: 'User29',
        email: 'user29@zenclass.dev'
      },
      {
        name: 'User48',
        email: 'user48@zenclass.dev'
      },
      {
        name: 'User17',
        email: 'user17@zenclass.dev'
      },
      {
        name: 'User33',
        email: 'user33@zenclass.dev'
      },
      {
        name: 'User8',
        email: 'user8@zenclass.dev'
      },
      {
        name: 'User10',
        email: 'user10@zenclass.dev'
      },
      {
        name: 'User11',
        email: 'user11@zenclass.dev'
      }
    ]
  }
  {
    company: 'TCS',
    date: 2020-11-05T00:00:00.000Z,
    students: [
      {
        name: 'User14',
        email: 'user14@zenclass.dev'
      },
      {
        name: 'User41',
        email: 'user41@zenclass.dev'
      },
      {
        name: 'User43',
        email: 'user43@zenclass.dev'
      },
      {
        name: 'User33',
        email: 'user33@zenclass.dev'
      },
      {
        name: 'User35',
        email: 'user35@zenclass.dev'
      },
      {
        name: 'User17',
        email: 'user17@zenclass.dev'
      },
      {
        name: 'User26',
        email: 'user26@zenclass.dev'
      },
      {
        name: 'User7',
        email: 'user7@zenclass.dev'
      },
      {
        name: 'User16',
        email: 'user16@zenclass.dev'
      },
      {
        name: 'User15',
        email: 'user15@zenclass.dev'
      }
    ]
  }
  {
    company: 'Zoho',
    date: 2020-11-15T00:00:00.000Z,
    students: [
      {
        name: 'User5',
        email: 'user5@zenclass.dev'
      },
      {
        name: 'User45',
        email: 'user45@zenclass.dev'
      },
      {
        name: 'User48',
        email: 'user48@zenclass.dev'
      },
      {
        name: 'User49',
        email: 'user49@zenclass.dev'
      },
      {
        name: 'User35',
        email: 'user35@zenclass.dev'
      },
      {
        name: 'User18',
        email: 'user18@zenclass.dev'
      },
      {
        name: 'User50',
        email: 'user50@zenclass.dev'
      },
      {
        name: 'User22',
        email: 'user22@zenclass.dev'
      },
      {
        name: 'User11',
        email: 'user11@zenclass.dev'
      },
      {
        name: 'User16',
        email: 'user16@zenclass.dev'
      }
    ]
  }
  {
    company: 'Freshworks',
    date: 2020-11-25T00:00:00.000Z,
    students: [
      {
        name: 'User47',
        email: 'user47@zenclass.dev'
      },
      {
        name: 'User6',
        email: 'user6@zenclass.dev'
      },
      {
        name: 'User46',
        email: 'user46@zenclass.dev'
      },
      {
        name: 'User31',
        email: 'user31@zenclass.dev'
      },
      {
        name: 'User38',
        email: 'user38@zenclass.dev'
      },
      {
        name: 'User29',
        email: 'user29@zenclass.dev'
      },
      {
        name: 'User28',
        email: 'user28@zenclass.dev'
      },
      {
        name: 'User10',
        email: 'user10@zenclass.dev'
      },
      {
        name: 'User15',
        email: 'user15@zenclass.dev'
      },
      {
        name: 'User14',
        email: 'user14@zenclass.dev'
      }
    ]
  }
  //Find the number of problems solved by each user in CodeKata
  db.codekata.aggregate([
    {
      $lookup: {
        from: "users",
        localField: "user_id",
        foreignField: "_id",
        as: "user"
      }
    },
    {
      $unwind: "$user"
    },
    {
      $project: {
        _id: 0,
        user: "$user.name",
        problems_solved: 1
      }
    }
  ]);
  {
    problems_solved: 123,
    user: 'User12'
  }
  {
    problems_solved: 120,
    user: 'User15'
  }
  {
    problems_solved: 110,
    user: 'User17'
  }
  {
    problems_solved: 65,
    user: 'User27'
  }
  {
    problems_solved: 64,
    user: 'User29'
  }
  {
    problems_solved: 93,
    user: 'User46'
  }
  {
    problems_solved: 33,
    user: 'User25'
  }
  {
    problems_solved: 18,
    user: 'User8'
  }
  {
    problems_solved: 15,
    user: 'User42'
  }
  {
    problems_solved: 41,
    user: 'User49'
  }
  {
    problems_solved: 108,
    user: 'User38'
  }
  {
    problems_solved: 76,
    user: 'User43'
  }
  {
    problems_solved: 117,
    user: 'User7'
  }
  {
    problems_solved: 68,
    user: 'User14'
  }
  {
    problems_solved: 54,
    user: 'User24'
  }
  {
    problems_solved: 3,
    user: 'User26'
  }
  {
    problems_solved: 65,
    user: 'User13'
  }
  {
    problems_solved: 10,
    user: 'User22'
  }
  {
    problems_solved: 121,
    user: 'User23'
  }
  {
    problems_solved: 15,
    user: 'User28'
  }
  Type "it" for more
  // Find number of users who were absent and didn’t submit tasks between 15–31 Oct
  const absentUserIds = db.attendance.find({
    date: { $gte: ISODate("2020-10-15"), $lte: ISODate("2020-10-31") },
    status: "absent"
  }).map(doc => doc.user_id);
  
  
  const noSubmitUserIds = db.tasks.find({
    user_id: { $in: absentUserIds },
    date: { $gte: ISODate("2020-10-15"), $lte: ISODate("2020-10-31") },
    submitted: false
  }).map(doc => doc.user_id);
  
  
  const uniqueUsers = [...new Set(noSubmitUserIds)];
  print("Users absent and didn’t submit tasks:", uniqueUsers.length);
  TypeError: object is not iterable (cannot read property Symbol(Symbol.iterator))
  
  const absentUserIds = db.attendance.find({
    date: { $gte: ISODate("2020-10-15"), $lte: ISODate("2020-10-31") },
    status: "absent"
  }).map(doc => doc.user_id);
  
  
  const noSubmitUserIds = db.tasks.find({
    user_id: { $in: absentUserIds },
    date: { $gte: ISODate("2020-10-15"), $lte: ISODate("2020-10-31") },
    submitted: false
  }).map(doc => doc.user_id);
  
  
  const uniqueUsers = [...new Set(noSubmitUserIds)];
  print("Users absent and didn’t submit tasks:", uniqueUsers.length);
  TypeError: object is not iterable (cannot read property Symbol(Symbol.iterator))
  // Find the number of users who were absent and didn’t submit tasks between 15–31 Oct
  const absentUsers = db.attendance.find({
    date: {
      $gte: ISODate("2020-10-15"),
      $lte: ISODate("2020-10-31")
    },
    status: "absent"
  }).toArray().map(doc => doc.user_id);
  
  
  const noTaskUsers = db.tasks.find({
    user_id: { $in: absentUsers },
    date: {
      $gte: ISODate("2020-10-15"),
      $lte: ISODate("2020-10-31")
    },
    submitted: false
  }).toArray().map(doc => doc.user_id);
  
  const uniqueUsers = [...new Set(noTaskUsers)];
  print("Users who were absent and didn’t submit tasks:", uniqueUsers.length);
  Users who were absent and didn’t submit tasks:
  0
  Atlas atlas-vstiof-shard-0 [primary] zenclass
  Selection deleted
  
  