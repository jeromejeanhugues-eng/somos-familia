'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useTranslations } from 'next-intl';
import { Send, CheckCircle } from 'lucide-react';

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  subject: z.string().min(3),
  message: z.string().min(10),
});

type FormData = z.infer<typeof schema>;

export default function ContactForm() {
  const t = useTranslations('contact');
  const tc = useTranslations('common');
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  async function onSubmit(_data: FormData) {
    await new Promise((r) => setTimeout(r, 800));
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <CheckCircle size={48} className="text-gold mb-4" />
        <p className="text-light text-lg font-playfair">{t('success')}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm text-light/60 mb-2">
            {t('name_label')} <span className="text-gold">*</span>
          </label>
          <input
            id="name"
            type="text"
            autoComplete="name"
            placeholder={t('name_placeholder')}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? 'name-error' : undefined}
            className={`input-field ${errors.name ? 'input-error' : ''}`}
            {...register('name')}
          />
          {errors.name && (
            <p id="name-error" role="alert" className="text-red-400 text-xs mt-1">
              {tc('required')}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm text-light/60 mb-2">
            {t('email_label')} <span className="text-gold">*</span>
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            placeholder={t('email_placeholder')}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'email-error' : undefined}
            className={`input-field ${errors.email ? 'input-error' : ''}`}
            {...register('email')}
          />
          {errors.email && (
            <p id="email-error" role="alert" className="text-red-400 text-xs mt-1">
              {tc('invalid_email')}
            </p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm text-light/60 mb-2">
          {t('subject_label')} <span className="text-gold">*</span>
        </label>
        <input
          id="subject"
          type="text"
          placeholder={t('subject_placeholder')}
          aria-invalid={!!errors.subject}
          aria-describedby={errors.subject ? 'subject-error' : undefined}
          className={`input-field ${errors.subject ? 'input-error' : ''}`}
          {...register('subject')}
        />
        {errors.subject && (
          <p id="subject-error" role="alert" className="text-red-400 text-xs mt-1">
            {tc('required')}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm text-light/60 mb-2">
          {t('message_label')} <span className="text-gold">*</span>
        </label>
        <textarea
          id="message"
          rows={6}
          placeholder={t('message_placeholder')}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'message-error' : undefined}
          className={`input-field resize-none ${errors.message ? 'input-error' : ''}`}
          {...register('message')}
        />
        {errors.message && (
          <p id="message-error" role="alert" className="text-red-400 text-xs mt-1">
            {tc('required')}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-primary w-full md:w-auto justify-center disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? tc('loading') : t('submit')}
        {!isSubmitting && <Send size={16} />}
      </button>
    </form>
  );
}
