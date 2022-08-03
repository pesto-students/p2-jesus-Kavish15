//Implementation of Stack

#include <iostream>
#include <string.h>
using namespace std;
#define Size 1000

class Stack {
	int top;

public:
	int a[Size]; 

	Stack() {
    top = -1; 
    }
	bool push(int x);
	int pop();
	int peek();
	bool isEmpty();
};

bool Stack::push(int x)
{
	if (top >= (Size - 1)) {
		cout << "Stack is Full (Overflow)";
		return false;
	}
	else {
		a[++top] = x;
		cout << x << "Value Pushed in stack\n";
		return true;
	}
}

int Stack::pop()
{
	if (top < 0) {
		cout << "Stack is Empty (Underflow)";
		return 0;
	}
	else {
		int x = a[top--];
		return x;
	}
}
int Stack::peek()
{
	if (top < 0) {
		cout << "Stack is Empty";
		return 0;
	}
	else {
		int x = a[top];
		return x;
	}
}

bool Stack::isEmpty()
{
	return (top < 0);
}


int main()
{
	class Stack s;
	s.push(10);
	s.push(20);
	s.push(30);
	cout << s.pop() << " Popped from stack\n";
	
	
	cout << "Top element is : " << s.peek() <<"\n";
	
	
	cout<<"Elements in stack : ";
	while(!s.isEmpty())
	{
		cout<<s.peek()<<" ";
		s.pop();
	}
return 0;
}



