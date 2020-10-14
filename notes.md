## INICIANDO PROJETO
  # yarn init -y

## INSTALAR EXPRESS
  # yarn add express
  # yarn add @types/express -D
  # yarn add ts-node-dev -D

## INSTALAR TYPESCRIPT
  # yarn add typescript -D
  # yarn tsc --init

## INSTALAR TYPEORM
  # yarn add typeorm sqlite3
  # criar/configuirar arquivo "ormconfig.json" na raiz do projeto
  # configurar script "typeorm" no "package.json"
  # yarn typeorm migration:create -n "nome_da_migration" (criar migration)
  # yarn typeorm migration:run (executar migration)

## INSTALAR MULTER (Upload de Imagens)
  # yarn add multer
  # yarn add @types/multer -D

## TRATAMENTO DE EXCEÇÕES
  #  yarn add express-async-errors

## VALIDAÇÃO DE DADOS COM YUP
  # yarn add yup
  # yarn add @types/yup -D

## INSTALAR CORS
  # yarn add cors
  # yarn add @types/cors -D

## EXECUTAR PROJETO
  # configurar script "dev" no "package.json"
  # yarn dev