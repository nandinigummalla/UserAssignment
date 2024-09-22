import pandas as pd
import matplotlib.pyplot as plt

data = pd.read_csv('data.csv')

plt.figure(figsize=(10, 6))
plt.hist(data['age'], bins=10, color='skyblue', edgecolor='black')

plt.xlabel('Age')
plt.ylabel('Number of Users')
plt.title('Age Distribution of Users')

plt.show()
