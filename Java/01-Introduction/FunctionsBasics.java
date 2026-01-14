public class FunctionsBasics {

    // Function without return value
    static void greet() {
        System.out.println("Hello, welcome to Java functions!");
    }

    // Function with parameters and return value
    static int add(int a, int b) {
        return a + b;
    }

    public static void main(String[] args) {
        greet();

        int result = add(10, 20);
        System.out.println("Sum: " + result);
    }
}
