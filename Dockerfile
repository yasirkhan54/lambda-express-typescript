FROM public.ecr.aws/lambda/nodejs:18

# Install Chrome dependencies
RUN yum update -y && yum install -y wget gnupg

# # Install Google Chrome
# RUN wget https://dl.google.com/linux/direct/google-chrome-stable_current_x86_64.rpm
# RUN yum localinstall -y google-chrome-stable_current_x86_64.rpm

# # Set Chrome binary path
# ENV CHROME_BIN=/usr/bin/google-chrome-stable

WORKDIR /usr/application

COPY . .

RUN npm install 

RUN npm run build

CMD [ "/usr/application/dist/index.handler" ]
