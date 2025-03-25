import { UserRelated } from "./User";

export interface BillCategory {
  id: number;
  user_id: number;
  name: string; // LAZER | ALIMENTACAO | OUTRO
  active: boolean;
}

export interface BillPaymentMethod {
  id: number;
  user_id: number;
  name: string; // SANTANDER | EMPRÉSTIMO | OUTRO
  active: boolean;
}

export interface BillShared {
  // se o gasto foi compartilhado com alguem
  id: number;
  user_id: number;
  user_related: UserRelated;
  bill_id: number;
  discount: number; // quanto a pessoa pagou em reais
  discount_type: "monthly" | "total"; // se o que a pessoa vai pagar vai abater da compra toda ou por parcela
}

export interface Bill {
  id: number;
  bill_category: BillCategory;
  bill_payment_method: BillPaymentMethod;
  user_id: number;
  bill_shared?: BillShared;
  description?: string | null; // o que foi a compra
  bill_name?: string | null; // como está na fatura
  payment_type: 1 | 2 | 3; // 1 = à vista, 2 = parcelado, 3 = assinatura
  total_amount: number; // o valor total
  installment_amount?: number | null; // quantidade de parcelas
  user_amount?: number | null; // o valor que eu vou pagar
  start_date: Date; // data de inicio da compra
  end_date: Date; // só será diferente da data de inicio se for uma assinatura ou parcelada
}
