import pandas as pd
import numpy as np

data = pd.read_csv('data.csv')

mean_age = np.mean(data['age'])
median_age = np.median(data['age'])
std_age = np.std(data['age'])

print(f"Mean Age: {mean_age}")
print(f"Median Age: {median_age}")
print(f"Standard Deviation of Age: {std_age}")
