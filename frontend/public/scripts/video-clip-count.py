import os

# Get relative path to this file
PATH = os.path.join(os.path.dirname(os.path.abspath(__file__)), "../../public/videos")


def filter_files():
    files = os.listdir(PATH)
    return [f for f in files if f.endswith(".mp4") and f.startswith("cyberpunk")]

def count_clips():
    files = filter_files()
    return len(files)

if __name__ == "__main__":
    print(count_clips())