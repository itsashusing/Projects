# importing all the required modules 
from django.shortcuts import render, redirect 
from pytube import *


# defining function 
def home(request): 

	# checking whether request.method is post or not 
	if request.method == 'POST': 
		
		# getting link from frontend 
		link = request.POST['link'] 
		video = YouTube(link,proxies='18546') 

		# setting video resolution 
		stream = video.streams.get_lowest_resolution() 
		
		# downloads video 
		stream.download() 

		# returning HTML page 
		return render(request, 'home.html') 
	return render(request, 'home.html')

