//Sum of Two LL

// { Driver Code Starts
// driver

#include <bits/stdc++.h>
using namespace std;

/* Linked list Node */
struct Node {
    int data;
    struct Node* next;
    Node(int x) {
        data = x;
        next = NULL;
    }
};

struct Node* buildList(int size)
{
    int val;
    cin>> val;
    
    Node* head = new Node(val);
    Node* tail = head;
    
    for(int i=0; i<size-1; i++)
    {
        cin>> val;
        tail->next = new Node(val);
        tail = tail->next;
    }
    
    return head;
}

void printList(Node* n)
{
    while(n)
    {
        cout<< n->data << " ";
        n = n->next;
    }
    cout<< endl;
}


 // } Driver Code Ends
/* node for linked list:

struct Node {
    int data;
    struct Node* next;
    Node(int x) {
        data = x;
        next = NULL;
    }
};

*/

class Solution
{
    public:
    
    struct Node* reverselink(struct Node* head){
       if(head == NULL || head->next == NULL){
           return head;
       }
       struct Node* nhead=reverselink(head->next);
       head->next->next=head;
       head->next=NULL;
       return nhead;
   }
    //Function to add two numbers represented by linked list.
    struct Node* addTwoLists(struct Node* first, struct Node* second)
    {
        first=reverselink(first);
        second=reverselink(second);
        Node* foo=new Node(0);
        Node* temp=foo;
        int carry=0;
        
        while(first!=NULL || second!=NULL || carry){
          int sum=0;
          
          if(first!=NULL){
              sum+=first->data;
              first=first->next;
          }
          
          
          if(second!=NULL){
              sum+=second->data;
              second=second->next;
          }
          
          sum+=carry;
          carry=sum/10;
          
          Node* tt=new Node(sum%10);
          temp->next=tt;
          temp=tt;
        }
        
        return reverselink(foo->next);
    }
};


// { Driver Code Starts.

int main()
{
    int t;
    cin>>t;
    while(t--)
    {
        int n, m;
        
        cin>>n;
        Node* first = buildList(n);
        
        cin>>m;
        Node* second = buildList(m);
        Solution ob;
        Node* res = ob.addTwoLists(first,second);
        printList(res);
    }
    return 0;
}
  // } Driver Code Ends