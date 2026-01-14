public class TypeCasting {

    public static void main(String[] args) {

        // Implicit Type Casting (Widening)
        int intValue = 100;
        double doubleValue = intValue;

        System.out.println("Implicit Casting:");
        System.out.println("Int value: " + intValue);
        System.out.println("Double value: " + doubleValue);

        // Explicit Type Casting (Narrowing)
        double price = 99.99;
        int roundedPrice = (int) price;

        System.out.println("\nExplicit Casting:");
        System.out.println("Original price: " + price);
        System.out.println("Rounded price: " + roundedPrice);
    }
}
