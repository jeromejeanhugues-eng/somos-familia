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
  motivation: z.string().min(20),
  availability: z.array(z.string()).min(1),
});

type FormData = z.infer<typeof schema>;

export default function JoinForm() {
  const t = useTranslations('join');
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

  const availabilityOptions = [
    { value: 'tuesday', label: t('availability_tuesday') },
    { value: 'thursday', label: t('availability_thursday') },
    { value: 'weekends', label: t('availability_weekends') },
    { value: 'remote', label: t('availability_remote') },
  ];

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
          <label htmlFor="j-name" className="block text-sm text-light/60 mb-2">
            {t('name_label')} <span className="text-gold">*</span>
          </label>
          <input
            id="j-name"
            type="text"
            autoComplete="name"
            placeholder={t('name_placeholder')}
            aria-invalid={!!errors.name}
            className={`input-field ${errors.name ? 'input-error' : ''}`}
            {...register('name')}
          />
          {errors.name && (
            <p role="alert" className="text-red-400 text-xs mt-1">{tc('required')}</p>
          )}
        </div>

        <div>
          <label htmlFor="j-email" className="block text-sm text-light/60 mb-2">
            {t('email_label')} <span className="text-gold">*</span>
          </label>
          <input
            id="j-email"
            type="email"
            autoComplete="email"
            placeholder={t('email_placeholder')}
            aria-invalid={!!errors.email}
            className={`input-field ${errors.email ? 'input-error' : ''}`}
            {...register('email')}
          />
          {errors.email && (
            <p role="alert" className="text-red-400 text-xs mt-1">{tc('invalid_email')}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="j-motivation" className="block text-sm text-light/60 mb-2">
          {t('motivation_label')} <span className="text-gold">*</span>
        </label>
        <textarea
          id="j-motivation"
          rows={5}
          placeholder={t('motivation_placeholder')}
          aria-invalid={!!errors.motivation}
          className={`input-field resize-none ${errors.motivation ? 'input-error' : ''}`}
          {...register('motivation')}
        />
        {errors.motivation && (
          <p role="alert" className="text-red-400 text-xs mt-1">{tc('required')}</p>
        )}
      </div>

      <fieldset>
        <legend className="block text-sm text-light/60 mb-3">
          {t('availability_label')} <span className="text-gold">*</span>
        </legend>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {availabilityOptions.map(({ value, label }) => (
            <label
              key={value}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <input
                type="checkbox"
                value={value}
                className="w-4 h-4 border border-light/20 bg-transparent accent-gold cursor-pointer"
                {...register('availability')}
              />
              <span className="text-sm text-light/60 group-hover:text-light transition-colors">
                {label}
              </span>
            </label>
          ))}
        </div>
        {errors.availability && (
          <p role="alert" className="text-red-400 text-xs mt-2">{tc('required')}</p>
        )}
      </fieldset>

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
