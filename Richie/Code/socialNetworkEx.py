class User:
    def __init__(self, name, idNumber):
        self.name = name
        self.idNumber = idNumber
    def printInfo(self):
        print("name is " + self.name)
        print("ID is " + str(self.idNumber))
    def printID(self):
        print("ID is " + str(self.idNumber))


def main():
    user1 = input("What is your name?: ")
    print(user1)

    userVar = User(user1, 427)
    userVar.printInfo()



main()
