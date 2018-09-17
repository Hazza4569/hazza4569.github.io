#include <iostream>
#include <string>
using namespace std;

int main()
{
	string line = "lampost";
	cout<<line.find_last_of("aeiousy")<<endl<<line.length()<<endl;
	if (!(line.length() - line.find_last_of("aeiousy") == 1) && line.length()>7)
	{
        cout<<"this one is good :)"<<endl;
	}
	else
	{
        cout<<"this one is bad :("<<endl;
	}
	return 0;
}
