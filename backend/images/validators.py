from django.core.exceptions import ValidationError

from pathlib import Path

import magic

def validar_imagem(image):

    extensoes_permitidas = ['.jpg', '.jpeg', '.png', '.gif']

    extensao = Path(image.name).suffix.lower()

    # Valida extensão do arquivo
    if extensao not in extensoes_permitidas:
        raise ValidationError(f'Extensão de arquivo inválida. Extensões permitidas: {", ".join(extensoes_permitidas)}')

    # Valida tamanho
    tamanho_maximo = 5 * 1024 * 1024  # 5 mb

    if image.size > tamanho_maximo:
        raise ValidationError(f'Tamanho do arquivo excede o limite de 5 MB.')
    
# validar tipo de arquivo 
def validar_tipo_arquivo(image):

    mime = magic.from_buffer(image.read(1024), mime=True)

    tipos_permitidos = ['image/jpeg', 'image/png', 'image/gif']

    if mime not in tipos_permitidos:
        raise ValidationError(f'Tipo de arquivo inválido. Tipos permitidos: {", ".join(tipos_permitidos)}')