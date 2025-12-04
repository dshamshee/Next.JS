
// class Test {
//     public static void main(String[] args) {

//         // Find the numbers which are have square of a number
//         int[] arr = {2, 4, 5, 9, 16, 25, 32, 36, 50, 49};
//         // int[] newArr = new int[arr.length];

//         for (int i = 0; i < arr.length; i++) {
//             int count = 0;
//             for(int j =1; j<= arr[i]; j++){
//                 if(arr[i] % j == 0 ){
//                     count = count + 1;
//                 }
//             }
//             if(count % 2 !=0){
//                 // newArr[i] = arr[i];
//                 System.out.println(arr[i]);
//             }
//         }
//     }
// }


// class Test {
//     public static void main(String[] args){
//         String str = "danish 123";
//         String result = "";

//         for(int i=0; i<str.length(); i++){
//             char ch = str.charAt(i);
//             int ascii = ch;
//             if(ascii >= 65 && ascii <= 90){
//                 result += (char) (ascii + 32);
//             }else if(ascii >= 97 && ascii <= 122){
//                 result += (char) (ascii - 32);
//             }else{
//                 result += ch;
//             }
//         }

//         System.out.println(result);
//     }
// }


// class Test {
//     public static void main(String[] args){
//         String str = "start";
//         int i = 0;
//         int j = str.length()-1;
//         boolean isPelindrome = false;

//         while(i<=j){
//             if(str.charAt(i) == str.charAt(j)){
//                 i++;
//                 j--;
//                 isPelindrome = true;
//             }else {
//                 isPelindrome = false;
//                 break;
//             }
//         }
//         if(isPelindrome) System.out.println("Pelindrome");
//         else System.out.println("Not a Pelindrome");
//     }
// }


// class Test {
//     public static void main(String[] args){
//         String str = "DANISH";
//         String reverse = "";

//         for(int i=str.length()-1; i>=0; i--){
//             reverse += str.charAt(i);
//         }

//         System.out.println(reverse);

//     }
// }


// Merge two sorted array in a single new array
// class Test {
//     public static void main(String[] args){
//         int[] arr1 = {0, 2, 5, 6};
//         int[] arr2 = {0, 0, 1, 3, 4, 8};
//         int[] mergeArray = new int[arr1.length + arr2.length];
//         int i = 0, j=0, k=0;

//         while(i<arr1.length && j<arr2.length){
//             if(arr1[i] < arr2[j]) mergeArray[k++] = arr1[i++];
//             else mergeArray[k++] = arr2[j++];
//         }

//         while(j<arr2.length){
//             mergeArray[k++] = arr2[j++];
//         }

//         while(i<arr1.length){
//             mergeArray[k++] = arr1[i++];
//         }

//         for(int r=0; r<mergeArray.length; r++){
//             System.out.print(mergeArray[r]);
//         }
//     }
// }


// Left rotation by k steps 
// class Test {
//     public void rotatedArray(int i, int j, int[] arr) {
//         while(i<j){
//             int temp = arr[i];
//             arr[i] = arr[j];
//             arr[j] = temp;
//             i++;
//             j--;
//         }
//     }
//     public static void main(String[] args){
//         int[] arr = {1, 2, 3, 4, 5};
//         int k = 2;
//         Test obj = new Test();
//         obj.rotatedArray(0, k-1, arr);
//         obj.rotatedArray(k, arr.length-1, arr);
//         obj.rotatedArray(0, arr.length-1, arr);
        
//         for(int i=0; i<arr.length; i++){
//             System.out.print(arr[i]);
//         }
//     }
// }


// Right rotation by k steps 
// class Test {
//     public void rotatedArray(int i, int j, int[] arr) {
//         while(i<j){
//             int temp = arr[i];
//             arr[i] = arr[j];
//             arr[j] = temp;
//             i++;
//             j--;
//         }
//     }
//     public static void main(String[] args){
//         int[] arr = {1, 2, 3, 4, 5};
//         int k = 2;
//         Test obj = new Test();
//         obj.rotatedArray(0, arr.length-1, arr);
//         obj.rotatedArray(0, k-1, arr);
//         obj.rotatedArray(k, arr.length-1, arr);
        
//         for(int i=0; i<arr.length; i++){
//             System.out.print(arr[i]);
//         }
//     }
// }