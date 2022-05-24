import os
import random
from PIL import Image

size = 640, 360
offset = -1;
key = "0123456789abcdef"
key_set = set(key)

for file in os.listdir():
    if file.endswith(".png"):
        name = file.strip(".png")
        if not set(name) <= set(key):
            name = ''.join(random.choices(key, k=8))
            os.rename(file, f"{name}.png")
        with Image.open(f"{name}.png") as im:
            if im.size > size:
                raw = im.copy()
                raw.save(f"../rawbg/{name}.png", "PNG")
                im.thumbnail(size)
                im.save(f"{name}.png", "PNG")