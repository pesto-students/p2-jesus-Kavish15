//Move last element to front of a given Linked List

class Solution
{
    public:
   
    Node * moveLastToFront( Node *head) 
    {
     
    Node *curr=head;
    Node *next=head->next;
    
    while(next->next!=NULL){
        curr=next;
        next=next->next;
    }
     curr->next=NULL;
     next->next=head;
     head=next;   
    
    return head;
    }
};