from subprocess import call
f = open("all", "r+")
f = f.readlines()
for c in f:
    call(["git", "show", c], stdout=f)