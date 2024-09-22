import pandas as pd

data = pd.read_csv('data.csv')

cleaned_data = data.dropna()

print(cleaned_data)

cleaned_data.to_csv('cleaned_data.csv', index=False)
