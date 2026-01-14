import java.util.Scanner;

public class InputWithTypeCasting {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter a decimal number: ");
        double num = sc.nextDouble();

        int convertedNum = (int) num;

        System.out.println("Original value: " + num);
        System.out.println("After type casting to int: " + convertedNum);

        sc.close();
    }
}
