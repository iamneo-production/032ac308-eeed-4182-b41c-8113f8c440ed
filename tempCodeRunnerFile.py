
# df1,df2

# scaler=MinMaxScaler(feature_range=(0,1))
# df1=scaler.fit_transform(np.array(df1).reshape(-1,1))

# df1
# ##splitting dataset into train and test split
# training_size=int(len(df1)*0.65)
# test_size=len(df1)-training_size
# train_data,test_data=df1[0:training_size,:],df1[training_size:len(df1),:1]

# training_size,test_size

# train_data

# import numpy
# # convert an array of values into a dataset matrix
# def create_dataset(dataset, time_step=1):
# 	dataX, dataY = [], []
# 	for i in range(len(dataset)-time_step-1):
# 		a = dataset[i:(i+time_step), 0]   ###i=0, 0,1,2,3-----99   100 
# 		dataX.append(a)
# 		dataY.append(dataset[i + time_step, 0])
# 	return numpy.array(dataX), numpy.array(dataY)

# # reshape into X=t,t+1,t+2,t+3 and Y=t+4
# time_step = 100
# X_train, y_train = create_dataset(train_data, time_step)
# X_test, ytest = create_dataset(test_data, time_step)


# # model.compile(..., run_eagerly=True)
# print(X_train.shape), print(y_train.shape)

# print(X_test.shape), print(ytest.shape)

# ### Create the Stacked LSTM model
# from keras.models import Sequential
# from keras.layers import Dense
# from keras.layers import LSTM

# # model.compile(..., run_eagerly=True)
# model=Sequential()
# model.add(LSTM(50,return_sequences=True,input_shape=(100,1)))
# model.add(LSTM(50,return_sequences=True))
# model.add(LSTM(50))
# model.add(Dense(1))
# model.compile(loss='mean_squared_error',optimizer='adam',run_eagerly=True)
# # model.compile(optimizer='adam', loss='mean_squared_error', metrics = ['accuracy'])


# model.summary()

# model.fit(X_train,y_train,validation_data=(X_test,ytest),epochs=100,batch_size=64,verbose=1)

# import tensorflow as tf
# ## Lets Do the prediction and check performance metrics
# train_predict=model.predict(X_train)
# test_predict=model.predict(X_test)










