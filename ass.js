class School{
    constructor(){
        this.teachers=[];
        this.students=[];
    }
    addteachers(Addt)
    {
this.teachers.push(Addt);
    }

    registerstudents(Regs){
        this.students.push(Regs);
     }
    fireteachers(fireT)
    {
 this.teachers.splice(fireT,1);
    }
    firestudents(fireS){
this.students.splice(fireS,1);
    }
}


class Teacher{
    constructor(fname,lname,gendar,age,subject){
        this.fname=fname;
        this.lname=lname;
        this.gendar=gendar;
        this.age=age;
        this.subject=subject;
        
    }
}

class Student{
    constructor(fname,lname,age,stage,gendar){
        this.fname=fname;
        this.lname=lname;
        this.age=age;
        this.stage=stage;
        this.gendar=gendar;

    }
}


const schT=new School();
schT.addteachers(
    new Teacher(
        'sara','azad','female',25,'math'));
schT.addteachers(
    new Teacher('ahmad','ali','male',30,'english'));
schT.addteachers(
    new Teacher('sazan','ibrahim','female',27,'kurdish'));

 console.log(schT);
schT.fireteachers(new Teacher(1));
console.log(schT);




const schS =new School();
schS.registerstudents(
    new Student('yousif','ahmad',7,2,'male'));
schS.registerstudents(
    new Student('lana','mohammed',6,1,'female'));
schS.registerstudents(
    new Student('mohammed','ali',10,4,'male'));
     
    
    console.log(schS);
      schS.firestudents(new Student(1));
     console.log(schS);

    




