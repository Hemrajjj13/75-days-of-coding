public class Main {
    public static void main(String[] args) {
        Human hemraj = new Human(23, "Hemraj", 50000, false);
        Human Rahul = new Human(23, "Rahul", 50000, false);

        System.out.println(Human.population);
        System.out.println(Human.population);

        greeting();
    }


    static void greeting() {
        System.out.println("Hello Friend");
    }
}
