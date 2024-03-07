import * as Dialog from '@radix-ui/react-dialog';
import { X ,ArrowCircleDown,ArrowCircleUp} from "phosphor-react";

import { ButtonTransaction, CloseButton, Content, Overlay, TransactionType } from './styles';

export function NewTransactionModal() {
  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <Dialog.Title>Nova Transação</Dialog.Title>

        <CloseButton>
          <X size={24} />
        </CloseButton>

        <form>
          <input type="text" placeholder="Descrição" required />
          <input type="number" placeholder="Preço" required />
          <input type="text" placeholder="Categoria" required />
<TransactionType>
<ButtonTransaction variant='income'>
<ArrowCircleUp size={24} />
              Entrada
</ButtonTransaction>
<ButtonTransaction variant='outcome'>
<ArrowCircleDown/>Saida
  
</ButtonTransaction>


</TransactionType>
          <button type="submit">
            Cadastrar
          </button>
        </form>
      </Content>
    </Dialog.Portal>
  );
}