import ngrok
import os
import subprocess
from pystyle import *
from colorama import Fore

ascii_art = """   _____                          
  / ___/___  ______   _____  _____
  \__ \/ _ \/ ___/ | / / _ \/ ___/
 ___/ /  __/ /   | |/ /  __/ /    
/____/\___/_/    |___/\___/_/ 

"""



print(Colorate.Vertical(Colors.red_to_blue, ascii_art))



auth_token = input(f"{Fore.YELLOW}[!]{Fore.RESET} Ngrok auth token: ")
ngrok.set_auth_token(auth_token)

listener = ngrok.connect(8000)

print(f"{Fore.YELLOW}[!]{Fore.RESET} Link: {listener.url()}")

os.system("python -m http.server")

input("Press enter to exit...")