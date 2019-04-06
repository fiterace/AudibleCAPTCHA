import pymongo
import pprint as pp
import os

def filter(files):
	ret=[]
	for file in files:
		
		if(file[-4:] == ".txt"):
			ret.append(file)

	return ret

files = filter(os.listdir(os.getcwd()))
client = pymongo.MongoClient("mongodb://localhost/2009")

db = client["audible-captcha"]
for file in files:
	
	a,b=file[:-4].split("-")  		#splitting the file name for getting the collection and the object name
	collection = db[a]				#the collections are named as per the initials of files

	with open(file,"r") as op:
		lines = op.readlines()
		for line in lines:
			collection.insert_one({"name": b,"link": line})







