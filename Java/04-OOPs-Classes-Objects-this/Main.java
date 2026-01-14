

public class Main {
    public static void main(String[] args) {

        Student[] students =new Student[5];
        Student hemraj = new Student(1, "Hemraj Suryawanshi", 87);
        Student random = new Student(hemraj);
        Student random2 = new Student();
        random2.Display();

        
        // student1.marks = 88.5f;
        // student1.name = "Hemraj";
        // student1.rollNo = 13;
        System.out.println(hemraj.rollNo);
        System.out.println(hemraj.name);
        System.out.println(hemraj.marks);

        System.out.println(random.rollNo);
        System.out.println(random.name);
        System.out.println(random.marks);

        hemraj.changeName("Nischay");
        hemraj.greeting();

        hemraj.Display();
        
    }
}

class Student {
    int rollNo;
    String name;
    float marks;

    Student () {
        this (13, "default person", 45);
    }

    Student (int rollNo, String name, float marks) {
        this.rollNo = rollNo;
        this.name = name;
        this.marks = marks;
    }

    Student (Student other){
        this.name = other.name;
        this.rollNo = other.rollNo;
        this.marks = other.marks;
    }

    void changeName(String newName) {
        name = newName;
    }

    void greeting() {
        System.out.println("Hello, My name is " + this.name);
    }

    void Display() {
        System.out.println(this.rollNo + ": " + this.name + " " + this.marks);
    }
}
