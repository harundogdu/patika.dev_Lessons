# Insertion Sort Project
[22,27,16,2,18,6] dizisinin insertion sort türüne göre aşamaları:
ilk aşamada dağınık dizideki en küçük elemanı bulup (2) ilk sıradaki eleman (22) ile yer değişkiliği yapıyoruz.

[2,27,16,22,18,6]
sıralı dizi oluşturmak için küçükten büyüğe doğru olacak şekilde sayılar bulunup yer değişitirilerek adım adım işlem yapıyoruz.

[2,6,16,22,18,27]
16 sayısı dizede olması gereken pozisyonda bulunuyor.

18 ve 22 yasılarının yerlerini değişitiriyoruz.

[2,6,16,18,22,27]
üç işlem sonunda sıralı bir dizi oluşturmuş oluyoruz.

Big-O gösterimi
n(n+1)/2 O(n^2)

Time Complexity
Average case: Aradığımız sayının ortada olması. Dizi sıralandıktan sonra 18 sayısının dizinin ortasında olduğunu görüyoruz. Bu sonuç bize 18 sayısının Avarage case kapsamında olduğunu gösterir.

[7,3,5,8,2,9,4,15,6] dizisinin Insertion Sort'a göre ilk 4 adımı
[2,3,5,8,7,9,4,15,6]
[2,3,4,8,7,9,5,15,6]
[2,3,4,5,7,9,8,15,6]
[2,3,4,5,6,9,8,15,7]

# Merge Sort Project
[16,21,11,8,12,22] -> Merge Sort;
1. Step; [16,21,11] [8,12,22]
2. Step; [16,21] [11]        [8,12] [22]
3. Step; [16] [21] [11]      [8] [12] [22]
4. Step; [16,21] [11]        [8,12] [22]
5. Step; [11,16,21]         [8,12,22]
6. Step; [8,11,12,16,21,22]

Big O (nlogn)

# Binary Search Tree
[7, 5, 1, 8, 3, 6, 0, 9, 4, 2] -> Binary Search Tree
Root is 7, 5 is in left side
1 is lesser than root 7 and lesser than 5 so 1 is in left side of the 5
8 is greater than root 7 so 8 is in right side of the root 7
3 is lesser than 7,5 but greater than 1 so 3 is in right side of the 1
6 is lesser than root 7 but greater than 5 so 6 is in right side of the 5
0 is leser than 7,5,1 so 0 is left side of the 1
9 is greater than 7,8 so 9 is right side of the 8
4 is lesser than 7,5 but greater than 1,3 so 4 is in the right side of the 3
2 is lesser than 7,5,3 but greater than 1 so 2 is in the left side of the 3

                        7
                      /   \
                     5     8
                    / \     \
                   1   6     9
                  / \
                 0   3
                    / \
                   2   4
                   
