import os

i = int(input("Enter the last number (inside ./original_photos): "))
ext = "jpg"

for filename in os.listdir(os.getcwd()):
    i += 1
    os.rename(filename, f"{i}.{ext}")


