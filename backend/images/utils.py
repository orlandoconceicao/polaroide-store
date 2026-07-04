import uuid


def nome_seguro(instance, filename):
    # Extrai a extensão do arquivo
    extensao = filename.split('.')[-1]

    # Gera um nome de arquivo único usando UUID
    nome_arquivo = f"{uuid.uuid4()}.{extensao}"
    
    return f"uploads/{nome_arquivo}"