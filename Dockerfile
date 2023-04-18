FROM public.ecr.aws/lambda/nodejs:18

WORKDIR /application/leads_backend

COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]

RUN npm install 

COPY . .

CMD [ "/application/leads_backend/index.handler" ]