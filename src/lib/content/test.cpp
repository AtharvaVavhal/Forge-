#include<iostream>
using namespace std;
int main(){
    int target =42;
    int index = -1;
    for(int i=0;i<100;i++){
        if(i==target){
            index =i;
            break;
        }
    }
    cout << index;
}