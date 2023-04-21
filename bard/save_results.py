import sqlite3

# Connect to the database
conn = sqlite3.connect("horoscope_compatibility.db")

# Create a cursor
c = conn.cursor()

# Insert the user's name and score into the database
c.execute("INSERT INTO results (name, score) VALUES (?, ?)", (name, score))

# Commit the changes to the database
conn.commit()

# Close the connection to the database
conn.close()
