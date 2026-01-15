
public class Main {
    public static void main(String[] args) {
        // Car car1 = new Car();
        // car1.id = 01;
        // car1.name = "BMW";
        // car1.model = "M5";

        // System.out.println(car1.id);
        // System.out.println(car1.name);
        // System.out.println(car1.model);

        
        Car car2 = new Car(2, "XUV", "700");

        System.out.println();
        System.out.println(car2.id);
        System.out.println(car2.name);
        System.out.println(car2.model);

        Box b1 = new Box(); // calls Box()
        b1.Display();

        Box b2 = new Box(5, 5); // calls Box(int , int)
        b2.Display();

        Box b3 = new Box(3, 3, 3); // calls Box(int , int, int)
        b3.Display();

        
    }
}
class Box {
    int length;
    int width;
    int height;

    Box() {
        length = 1;
        width = 1;
        height = 1;
    }

    Box (int l, int w) {
        this.length = l;
        this.width = w;
        this.height = 1;
    }
    Box (int l, int w, int h) {
        this.length = l;
        this.width = w;
        this.height = h;
    }


    void Display() {
        System.out.println(length + " " + width + " " + height);
    }

}

class Car {
    int id;
    String name;
    String model;

    Car (int id, String name, String model) {
        this.id = id;
        this.name = name;
        this.model = model;
    }
}