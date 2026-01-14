import java.util.Scanner;

public class MatrixSearch {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int[][] matrix = {
            {10, 20, 30},
            {40, 50, 60},
            {70, 80, 90}
        };

        System.out.print("Enter element to search: ");
        int target = sc.nextInt();

        boolean found = false;

        for (int i = 0; i < matrix.length; i++) {
            for (int j = 0; j < matrix[i].length; j++) {
                if (matrix[i][j] == target) {
                    System.out.println("Found at row " + i + ", column " + j);
                    found = true;
                    break;
                }
            }
        }

        if (!found) {
            System.out.println("Element not found");
        }

        sc.close();
    }
}
