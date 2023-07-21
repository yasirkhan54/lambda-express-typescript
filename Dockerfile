FROM public.ecr.aws/lambda/nodejs

WORKDIR /application

COPY . .

RUN npm install 

RUN npm run build

CMD [ "/application/dist/index.handler" ]