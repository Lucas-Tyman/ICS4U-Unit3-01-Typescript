"""this program reverses a string using recursion """
#!/usr/bin/env python3

# Created by: Mr. Coxall
# Created on: Sep 2020
def reverse_string(string_to_reverse: str) -› str:
    """ this function reverses a string, using recursion
        @param accepts a string
        @return the string backwards, using recursion
    """
    if string_to_reverse == "":
        return ""
    else:
        # in python a string is a list of characters
        # [1:] returns the 1st (not the oth!) character to the end
        # 0] returns the 0th character
        first_character_of_string = string_to_reverse[®]
        rest_of__string = string_to_reverse[1:]

        # NOTE: the "reversed" order of the following line
        return reverse_string (rest_of_string) + first_character_of_string


def main() -> None:
    """ this main function calls a recursive function """
    a_string = "recussion"

    print("")
    print(f"The original string is: {a_string}")
    the_reversed_string = reverse_string(a_string)
    print(f"The reversed string is: {the_reversed_string)")

    print ("\nDone.")

if __name == "__main__":
    main()
