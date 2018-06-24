#include <iostream>
#include <cstdlib>
#include <fstream>
#include <string>
#include <sstream>
#include <vector>

std::string getBlogEntriesHtml(int numEntries);
std::string getGalleryHtml(std::vector<std::string> filenames, std::vector<std::string> captions);

int main(int argc, char** argv) {
    if (!(argc == 2)) {
        std::cout << "program requires 1 argument, the number of blog entries.\n";
	return 1;
    }
    int numEntries = atoi(argv[1]);
    if (numEntries < 1) {
	std::cout << "must be at least one blog entry.\n";
	return 1;
    }

    std::ifstream protoHtml("/Users/harry/WebstormProjects/hcooke/blog/proto.html");
    std::string strLine;

    std::ofstream indexHtml("/Users/harry/WebstormProjects/hcooke/blog/index.html");
    
    while (std::getline(protoHtml,strLine)) {
        if (strLine.substr(0,2) == "`!") 
            indexHtml << getBlogEntriesHtml(numEntries);
	else 
            indexHtml << strLine << std::endl;
    }
    std::cout << "Generated blog HTML.\n";
    return 0;
}


std::string getBlogEntriesHtml(int numEntries) {
    std::stringstream strStream;

    for (int i = numEntries; i > 0; i--) {
        std::ifstream rawEntry("/Users/harry/WebstormProjects/hcooke/blog/resources/blog-entries/" + std::to_string(i) + ".txt");
	std::string strRead;
	bool isImages(false);

        strStream << "<div class=\"blog-entry\">\n";
	//Add blog title
	std::getline(rawEntry, strRead);
        strStream << "    <h2>" << strRead << "</h2>\n";
        //Add entry date
	std::getline(rawEntry,strRead);
        strStream << "    <h3>" << strRead << "</h3>\n";
        //Add body text
	while (std::getline(rawEntry, strRead)) {
	    //detect escape sequence:
	    if (strRead.substr(0,2) == "`!") {
                isImages = true;
		break;
	    }

	    //add paragraph:
	    strStream << "    <p>\n        " << strRead
		      << "\n    </p>\n";
	}

	strStream << "\n";

	if (isImages) {
            std::vector<std::string> filenames;
	    std::vector<std::string> captions;
            
	    while (true) {    
	        //Read filename
	        std::getline(rawEntry, strRead, ' ');
		if (rawEntry.eof()) break; //check for EOF
	        filenames.push_back(strRead);

		std::getline(rawEntry, strRead, '|'); //discard spaces

		//Read caption
		std::getline(rawEntry, strRead);
                captions.push_back(strRead);
	    }

	    strStream << getGalleryHtml(filenames, captions);

	}

	strStream << "</div>\n\n";
    }

    return strStream.str();
}


std::string getGalleryHtml(std::vector<std::string> filenames, std::vector<std::string> captions) {
    std::stringstream strStream;

    strStream << "<div class=\"my-gallery\">\n";
    //inset images:
    for (int i = 0; i < filenames.size(); i++) {
        strStream << "    <figure itemprop=\"associatedMedia\">\n"

		  << "        <a href=\"resources/blog-entries/"
		  << filenames[i] << "\" itemprop=\"contentUrl\">\n"

		  << "            <img src=\"resources/blog-entries/"
		  << filenames[i] << "\" itemprop=\"thumbnail\" alt=\""
		  << filenames[i].substr(0,filenames[i].find('.')) << "\" />\n"

		  << "        </a>\n"

		  << "        <figcaption itemprop=\"caption description\">"
		  << captions[i] << "</figcaption>\n"

	          << "    </figure>\n";
    }
    strStream << "</div>\n\n";
    
    //add photoswipe items:
    strStream << "<div class=\"pswp\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\n <div class=\"pswp__bg\"></div>\n <div class=\"pswp__scroll-wrap\">\n <div class=\"pswp__container\">\n <div class=\"pswp__item\"></div>\n <div class=\"pswp__item\"></div>\n <div class=\"pswp__item\"></div>\n </div>\n <div class=\"pswp__ui pswp__ui--hidden\">\n <div class=\"pswp__top-bar\">\n <div class=\"pswp__counter\"></div>\n <button class=\"pswp__button pswp__button--close\" title=\"Close (Esc)\"></button>\n <button class=\"pswp__button pswp__button--share\" title=\"Share\"></button>\n <button class=\"pswp__button pswp__button--fs\" title=\"Toggle fullscreen\"></button>\n <button class=\"pswp__button pswp__button--zoom\" title=\"Zoom in/out\"></button>\n <div class=\"pswp__preloader\">\n <div class=\"pswp__preloader__icn\">\n <div class=\"pswp__preloader__cut\">\n <div class=\"pswp__preloader__donut\"></div>\n </div>\n </div>\n </div>\n </div>\n <div class=\"pswp__share-modal pswp__share-modal--hidden pswp__single-tap\">\n <div class=\"pswp__share-tooltip\"></div>\n </div>\n <button class=\"pswp__button pswp__button--arrow--left\" title=\"Previous (arrow left)\">\n </button>\n <button class=\"pswp__button pswp__button--arrow--right\" title=\"Next (arrow right)\">\n </button>\n <div class=\"pswp__caption\">\n <div class=\"pswp__caption__center\"></div>\n </div>\n </div>\n </div>\n </div>\n\n";

    return strStream.str();
}





