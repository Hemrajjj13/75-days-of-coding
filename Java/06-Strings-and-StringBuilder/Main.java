public class Main {
    public static void main(String[] args) {
        
        /* ===============================
           1. STRING CREATION
           =============================== */
        
        // String literal (stored in string pool)
        String s1 = "java";

        // ANother reference to same pool object
        String s2 = "java";

        // String object using new (stored in heap)
        String s3 = new String("java");
        System.out.println("s1 == s2 : " + (s1 == s2));
        System.out.println("s1 == s3 : " + (s1 == s3));

        System.out.println("s1 == s3 : " + (s1.equals(s3)));


        /* ===============================
           2. STRING IMMUTABILITY
           =============================== */
        
        String s = "Hello";
        s.concat("World");  //  does not change original value
        System.out.println(s); // Hello

        s = s.concat(" World"); //  New object created 
        System.out.println(s);  // Hello World


        /* ===============================
           3. LENGTH & CHARACTER ACCESS
           =============================== */

        String str = "Programming";
        System.out.println(str.length());
        System.out.println(str.charAt(0));
        System.out.println(str.charAt(str.length() - 1));

        /* ===============================
           4. STRING COMPARISON
           =============================== */

        String a = "apple";
        String b = "Apple";

        System.out.println(a.equals(b));
        System.out.println(a.equalsIgnoreCase(b));
        System.out.println(a.compareTo(b));

        /* ===============================
           5. SUBSTRING & SEARCH
           =============================== */

        String text = "Java is powerful";

        System.out.println(text.substring(0, 4));
        System.out.println(text.substring(8));
        System.out.println(text.contains("is"));
        System.out.println(text.indexOf("power"));
        System.out.println(text.startsWith("Java"));
        System.out.println(text.endsWith("ful"));


        /* ===============================
           6. CASE CONVERSION & TRIM
           =============================== */

        String messy = "    Learn Java  ";

        System.out.println(messy.toUpperCase());
        System.out.println(messy.toLowerCase());
        System.out.println(messy.trim());

        /* ===============================
           7. STRING REPLACEMENT
           =============================== */
        
        String msg = "I love Java";
        System.out.println(msg.replace("Java", "DSA"));


        /* ===============================
           8. STRING SPLIT
           =============================== */

        String sentence = "java DSA MERN Backend";
        String[] parts = sentence.split(" ");

        for (String part : parts) {
            System.out.print(part + " ");
        }
        System.out.println();


        /* ===============================
           9. STRING TO CHAR ARRAY
           =============================== */

        String word = "Code";
        char[] chars = word.toCharArray();

        for (char c : chars) {
            System.out.print(c);
        }
        System.out.println();

        /* ===============================
           10. STRING VALUE OF
           =============================== */

        int num = 100;
        String numStr = String.valueOf(num);
        System.out.println(numStr + 50); // 10050


        /* ===============================
           11. STRINGBUILDER (MUTABLE)
           =============================== */

        StringBuilder sb = new StringBuilder("Java");

        sb.append(" DSA");
        sb.insert(0, "Learn ");
        sb.replace(6, 9, "Advanced");
        sb.delete(0, 6);
        sb.reverse();

        System.out.println(sb);


        /* ===============================
           12. STRING VS STRINGBUILDER IN LOOP
           =============================== */

        // ❌ Inefficient
        String slow = "";
        for (int i = 0; i < 5; i++) {
            slow += i;
        }
        System.out.println(slow);

        // ✅ Efficient
        StringBuilder fast = new StringBuilder();
        for (int i = 0; i < 5; i++) {
            fast.append(i);
        }
        System.out.println(fast.toString());


        /* ===============================
           13. CHECK PALINDROME STRING
           =============================== */

        String pal = "madam";
        String reversed = new StringBuilder(pal).reverse().toString();

        System.out.println(pal.equals(reversed));

        /* ===============================
           14. COUNT VOWELS
           =============================== */

        String input = "education";
        int vowelCount = 0;

        for (int i = 0; i < input.length(); i++) {
            char ch = input.charAt(i);
            if ("aeiou".indexOf(ch) != -1) {
                vowelCount++;
            }
        }
        System.out.println("Vowels: " + vowelCount);


        /* ===============================
           15. STRING INTERN
           =============================== */

        String p1 = new String("Hello").intern();
        String p2 = "Hello";

        System.out.println(p1 == p2); // true (same pool reference)

    }
}