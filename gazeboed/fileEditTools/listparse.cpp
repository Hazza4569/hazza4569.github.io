#include <fstream>
#include <iostream>
#include <string>
using namespace std;

int main()
{
	string line;
	ifstream myfile("nounList.txt");
	ofstream fout("nouned.txt");
	while (getline(myfile,line))
	{
        if (!(line.length() - line.find_last_of("aeiousy") == 1) && line.length()>7)
        {
            fout<<line<<"ed"<<endl;
        }
	}
	return 0;
}
