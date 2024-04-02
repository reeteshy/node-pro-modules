# node-pro-modules

## steps to follow
- create a server and put the two propertu key and cert
- create a folder with cert name
- generate private file by using below cmd
openssl genrsa -out key.pen
- generate the cert file using pem
openssl req -new -key key.pem -out csr.pem
- fill ino ( Country, company )
- openssl x509 -req -days 365 -in csr.pem -signkey key.pem -out cert.pem

-- x509 -> standered togenerate key
-- -days 365 -> validity of ssl certificate
