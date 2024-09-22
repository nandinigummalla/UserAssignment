import pandas as pd

def filter_top_rows(dataframe, column_name, threshold=30):
    filtered_data = dataframe[dataframe[column_name] > threshold]
    
    return filtered_data.head()

data = pd.read_csv('data.csv')
top_rows = filter_top_rows(data, 'age', 30)

print(top_rows)
