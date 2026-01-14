public class FunctionsWithConditionAndLoop {

    static void printEvenNumbers(int limit) {
        for (int i = 1; i <= limit; i++) {
            if (i % 2 == 0) {
                System.out.println(i);
            }
        }
    }

    public static void main(String[] args) {
        printEvenNumbers(20);
    }
}
