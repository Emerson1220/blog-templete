#!/bin/bash

# Couleurs pour les messages
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

echo -e "${GREEN}🚀 Démarrage du déploiement...${NC}"

# Vérification des variables d'environnement requises
echo -e "${YELLOW}📝 Vérification des variables d'environnement...${NC}"
required_vars=("DATABASE_URL" "NEXTAUTH_SECRET")
missing_vars=()

for var in "${required_vars[@]}"; do
  if [ -z "${!var}" ]; then
    missing_vars+=("$var")
  fi
done

if [ ${#missing_vars[@]} -ne 0 ]; then
  echo "❌ Variables d'environnement manquantes :"
  printf '%s\n' "${missing_vars[@]}"
  exit 1
fi

echo -e "${GREEN}✅ Variables d'environnement vérifiées${NC}"

# Build du projet
echo -e "${YELLOW}🔨 Build du projet...${NC}"
npm run build
if [ $? -ne 0 ]; then
  echo "❌ Erreur lors du build"
  exit 1
fi
echo -e "${GREEN}✅ Build réussi${NC}"

# Déploiement sur Vercel
echo -e "${YELLOW}📤 Déploiement sur Vercel...${NC}"
vercel --prod
if [ $? -ne 0 ]; then
  echo "❌ Erreur lors du déploiement"
  exit 1
fi

echo -e "${GREEN}✅ Déploiement terminé avec succès !${NC}" 